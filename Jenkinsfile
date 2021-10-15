pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 14.18.1') {
                    sh 'npm install'
                }
            }
        }
    }
}