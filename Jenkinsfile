pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
      steps { sh 'npm run-script test -- --watch=false --browsers ChromeHeadless' }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}