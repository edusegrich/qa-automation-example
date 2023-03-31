#!/usr/bin/env bash

# execute this script from Installer root directory

WORKING_DIR=$(pwd)
PO_DIR=${WORKING_DIR}/tests/pageobjects

BOLD="1"
RED="1;31"
LIGHT_GREEN="1;32"
ORANGE="1;33"
LIGHT_BLUE="1;34"
LIGHT_CYAN="1;36"
WHITE="1;37"
END_COLOR="\033[0m"

echo_color() {
    INI_COLOR="\033[$2m"
    echo -e "${INI_COLOR}${1}${END_COLOR}"
}

function generate_po_dir() {
	read -p "Enter the name of the PageObject: " dir_name
	if [ -d "${PO_DIR}/${dir_name}" ]; then
		echo "PageObject ${dir_name} already exists"
		exit 1
	fi
	mkdir -p "${PO_DIR}"/"${dir_name}"
	echo "Created PageObject directory: ${dir_name}"
}

function generate_po_files {
	read -p "Enter the name of the PageObject file: " file_name
	if [ -f "${PO_DIR}/${dir_name}/${file_name}.js" ]; then
		echo "PageObject file ${file_name} already exists"
		exit 1
	fi
	touch "${PO_DIR}/${dir_name}/${file_name}".ts
	echo "import PageObject from '../PageObject';" >> "${PO_DIR}/${dir_name}/${file_name}".ts
	echo "class ${dir_name} extends PageObject {" >> "${PO_DIR}/${dir_name}/${file_name}".ts
	echo "}" >> "${PO_DIR}/${dir_name}/${file_name}".ts
	echo "export default ${dir_name};" >> "${PO_DIR}/${dir_name}/${file_name}".ts
	echo "Created PageObject file: ${file_name}.ts"

	#create the index file
	touch "${PO_DIR}"/"${dir_name}"/index.ts

	#create android and ios selector files
	touch "${PO_DIR}"/"${dir_name}"/selectors.android.ts
	touch "${PO_DIR}"/"${dir_name}"/selectors.ios.ts

	#populate selectors files
	echo "export const selectors = {};" >> "${PO_DIR}"/"${dir_name}"/selectors.android.ts
	echo "export const selectors = {};" >> "${PO_DIR}"/"${dir_name}"/selectors.ios.ts

	#populate index file
	echo "import ${dir_name} from './${file_name}';" >> "${PO_DIR}/${dir_name}"/index.ts

	#import selectors into index
	echo "import { selectors as androidSelectors } from './selectors.android';" >> "${PO_DIR}"/"${dir_name}"/index.ts
	echo "import { selectors as iosSelectors } from './selectors.ios';" >> "${PO_DIR}"/"${dir_name}"/index.ts
	#autoselect platform ternary
	echo "const ${dir_name}Selectors = (process.env.PLATFORM === 'android') ? androidSelectors : iosSelectors;" >> "${PO_DIR}/${dir_name}"/index.ts
	#export selectors
	echo "export { ${dir_name}Selectors };" >> "${PO_DIR}/${dir_name}"/index.ts
	#export page object
	echo "export default ${dir_name};" >> "${PO_DIR}/${dir_name}"/index.ts

}

function generate_po {
	generate_po_dir
	generate_po_files
}

generate_po

if [[ $? -eq 0 ]]
then
    echo_color "Page object directory successfully created! ✅" $LIGHT_GREEN
else
    echo_color "Error creating page object directory" $RED
fi
