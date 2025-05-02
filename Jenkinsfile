pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'mahdi02ch/tp3-devops'
        IMAGE_TAG = 'latest'
        HELM_RELEASE_NAME = 'basic-node-app'
        HELM_CHART_PATH = './mon-app'
    }

    stages {
        stage('Cloner le dépôt') {
            steps {
                git url: 'https://github.com/cap-mahdi/basic-node-app.git', branch: 'main'
            }
        }

        stage('Construire l\'image Docker') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Pousser l\'image Docker') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
                        sh """
                            echo "${DOCKER_TOKEN}" | docker login -u mahdi02ch --password-stdin
                            docker push ${DOCKER_IMAGE}:${IMAGE_TAG}
                        """
                    }
                }
            }
        }

        stage('Déployer avec Helm') {
            steps {
                script {
                    sh """
                        helm upgrade --install ${HELM_RELEASE_NAME} ${HELM_CHART_PATH} 
                    """
                }
            }
        }
    }
}
