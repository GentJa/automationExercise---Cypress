pipeline {
    agent any
    
    tools {nodejs "Node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/GentJa/automationExercise---Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'  
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/GentJa/automationExercise---Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
            }
        }
    }
}