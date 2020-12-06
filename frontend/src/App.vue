<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/issues">Issues</router-link>
      <router-link to="/people">People</router-link>
      <router-link to="/teams">Teams</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body{
    background: url("./assets/back.jpg") center center no-repeat fixed;
    background-size: cover;
  background-position: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
nav{
  display: flex;
  justify-content: space-around;
 margin-left:20%;
 margin-right: 20%;
  font-size: 18px;
  margin-bottom: 30px;;
}
a{
   text-decoration: none;
}
button{
  background: none;
  border:none;
  color:rgba(12, 170, 101, 0.9);
  font-size: 16px;
  font-weight: bold;
  outline: none;
  display: flex;
  margin-left:10px;
  cursor: pointer;
}
button:hover{
  color:rgb(4, 114, 66)
}
.modal-container{
  display: flex;
  justify-content: center;
}
.modal {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  margin: 50px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
  color:rgb(80, 79, 79);
  font-size: 16px;
  z-index: 9998;
  transition: opacity 0.3s ease;
}
.align-between{
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.align-end{
  display: flex;
  justify-content: flex-end;
}
.align-right{
  display: flex;
  justify-content: right;
  
}
input, textarea, select, option{
  border:none;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  padding:10px;
  margin:5px;
  resize: none;
  outline: none;
  width: 94%;
}
select{
  width: 100%;
  font-size: 14px;
  color:rgb(80, 79, 79);
}
.title{
  color:rgba(94, 35, 94, 0.7);
  text-shadow: 1px 1px rgba(94, 35, 94, 0.3);
  font-weight: bold;
  text-align: left;
  margin: 10px;
  font-size: 20px;
}
.row{
  margin-bottom:15px;
}
</style>
