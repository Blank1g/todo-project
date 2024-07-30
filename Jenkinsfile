pipeline {
  agent {
    docker { 
        image 'node:latest' 
    }
  }
  stages {
    stage('Install Dependencies') {
      steps { sh 'npm install' }
    }

    stage('Setup Chrome Headless') {
      steps {
        sh '''
          apt-get update
          apt-get install -y wget gnupg2
          wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
          sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
          apt-get update
          apt-get install -y google-chrome-stable
          CHROME_BIN="$(which google-chrome-stable)"
          export CHROME_BIN
        '''
      }
    }

    stage('Test') {
      steps {
        sh 'npm run-script test -- --watch=false --browsers ChromeHeadless'
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}