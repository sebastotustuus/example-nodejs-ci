pipeline {
  agent any

  tools {
    nodejs 'node'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Build dependencies') {
        steps {
            sh 'npm i'
        }
    }

    stage('Dir') {
         steps {
            sh 'ls'
        }
    }

    stage('Run Test') {
        steps {
            sh 'npm test'
        }
    }
  }

}