pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
      stage('Unit tests') {
        steps { sh 'ng test --browsers ChromeHeadless' }
      }
    }

    stage('Build') {
      steps { sh 'npm run build' }
    }
  }
}