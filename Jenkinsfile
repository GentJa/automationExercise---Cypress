pipeline {
    agent any 

    tools {nodejs "node"}

    stages {
        stage('Cypress parallel test suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        github url:'https://github.com/GentJa/automationExercise---Cypress.git',
                        bat 'npm install',
                        bat 'npm update',
                        bat 'npm run cypress:dashboard'
                    }
                }
                   stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        github url:'https://github.com/GentJa/automationExercise---Cypress.git',
                        bat 'npm install',
                        bat 'npm update',
                        bat 'npm run cypress:dashboard'
                    }
                }
            }
        }
    }
}