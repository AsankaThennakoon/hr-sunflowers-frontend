pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "tmat1560/hr-sunflowers-frontend"
        DOCKER_CREDENTIALS_ID = "asanka-dockerhub" // Replace with your Jenkins Docker Hub credentials ID
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }
        stage('Pull Docker Image Locally') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${DOCKER_IMAGE}:latest").pull()
                    }
                }
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Replace with `sh` if running on a Linux-based Jenkins agent
                    bat 'docker-compose down'
                    bat 'docker-compose up -d'
                }
            }
        }
        stage('Test Application') {
            steps {
                script {
                    bat """
                    timeout /t 10
                    curl -f http://localhost:1574 || exit /b 1
                    """
                }
            }
        }
    }
    

    post {
        always {
            echo "Pipeline completed."
        }
        failure {
            echo "Pipeline failed."
        }
    }
}
