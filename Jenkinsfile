pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 14.18.1') {
                    sh 'ls -lha'
                    sh 'npm install'
                }
            }
        }
    }
}