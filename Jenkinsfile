pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'mahdi02ch/tp3-devops'
    }

    stages {
        stage('Cloner le dépôt') {
            steps {
                git branch: 'main', url: 'https://github.com/cap-mahdi/basic-node-app.git'
            }
        }

        stage('Construire l\'image Docker') {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }

        stage('Pousser l\'image Docker') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-creds-id', variable: 'DOCKER_TOKEN')]) {
                    script {
                        sh """
                            echo "$DOCKER_TOKEN" | docker login -u votre-dockerhub --password-stdin
                            docker push $DOCKER_IMAGE
                        """
                    }
                }
            }
        }

        stage('Déployer sur Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl apply -f service.yaml'
                }
            }
        }
    }
}
