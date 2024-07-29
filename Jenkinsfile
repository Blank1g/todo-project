pipeline {
  agent any
  stages {
    stage('Install') {
      steps { 
        script {
          sh 'npm install'
        }
      }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps { 
            script {
              sh 'npm run-script lint'
            }
          }
        }
        stage('Unit tests') {
          steps { 
            script {
              sh 'npm run-script test'
            }
          }
        }
      }
    }

    stage('Build') {
      steps { 
        script {
          sh 'npm run-script build'
        }
      }
    }
  }
}