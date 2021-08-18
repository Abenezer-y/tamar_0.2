pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
      
        stage('Deploy') {
            steps {
                sh 'npm deploy'
            }
        }

    }
}
