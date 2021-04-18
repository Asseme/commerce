pipeline{
agent any
  stages{
    stage('Build'){
      steps{
        sh '/usr/local/Cellar/maven/3.8.1 clean'
      }
    }
    stage('Test'){
      steps{
        sh '/usr/local/Cellar/maven/3.8.1 test'
      }
      
    }
      
  }
}
