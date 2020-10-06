#!/bin/sh

function build_resume_theme_modules() {
    language=$1;

    # Create a temporary directory to build the resume theme modules.
    mkdir -p ./_tmp_resume_theme_modules/jsonresume-theme-deved-$language
    # Copy all the necessary files to the theme directory
    cp ./src/cv/theme/resume_$language.hbs ./_tmp_resume_theme_modules/jsonresume-theme-deved-$language/resume.hbs
    cp ./src/cv/theme/index.js ./_tmp_resume_theme_modules/jsonresume-theme-deved-$language
    cp ./src/cv/theme/package.json ./_tmp_resume_theme_modules/jsonresume-theme-deved-$language
    # Change to the theme directory and run npm install
    cd ./_tmp_resume_theme_modules/jsonresume-theme-deved-$language
    npm install

    cd ../..

    # Copy the theme module to the node_modules directory where it can be used by resume_cli
    cp -r ./_tmp_resume_theme_modules/jsonresume-theme-deved-$language ./node_modules/jsonresume-theme-deved-$language
    # Delete the temporary resume theme module directory
    rm -rf ./_tmp_resume_theme_modules
}

function build_resume() {
    language=$1;

    # Create a temporary directory to build the resume.
    mkdir _tmp_resume
    # Copy the file specified by file name to the temporary directory.
    cp ./src/cv/"resume_$language.json" ./_tmp_resume/resume.json
    # Change to the temporary directory where the resume can be built.
    cd ./_tmp_resume
    # Build the resume.
    resume export resume.pdf --theme "deved-$language"

    cd ..

    # Copy the resume to the assets directory.
    cp ./_tmp_resume/resume.pdf ./src/assets/"Moritz_Tomasi_CV_$language.pdf"
    # Delete the temporary resume directory.
    rm -rf ./_tmp_resume
}

build_resume_theme_modules EN
build_resume_theme_modules DE

build_resume DE
build_resume EN