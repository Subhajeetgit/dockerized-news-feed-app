pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'subhajeet1'
        BACKEND_IMAGE = "${DOCKERHUB_USERNAME}/backend-app"
        FRONTEND_IMAGE = "${DOCKERHUB_USERNAME}/frontend-app"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Subhajeetgit/dockerized-news-feed-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE ./backend'
                sh 'docker build -t $FRONTEND_IMAGE ./frontend'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                    sh 'echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin'
                    sh 'docker push $BACKEND_IMAGE'
                    sh 'docker push $FRONTEND_IMAGE'
                }
            }
        }
    }
}
