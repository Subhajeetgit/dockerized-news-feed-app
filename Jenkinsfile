pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'dockerhub-credentials' 
        DOCKER_HUB_USERNAME = 'subhajeet1'               
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning GitHub repository..."
                
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    script {
                        dockerImageFrontend = docker.build("${DOCKER_HUB_USERNAME}/frontend-app")
                    }
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    script {
                        dockerImageBackend = docker.build("${DOCKER_HUB_USERNAME}/backend-app")
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withDockerRegistry([credentialsId: DOCKER_HUB_CREDENTIALS, url: '']) {
                        dockerImageFrontend.push('latest')
                        dockerImageBackend.push('latest')
                    }
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build and Push Successful!'
        }
        failure {
            echo '❌ Build Failed!'
        }
    }
}
