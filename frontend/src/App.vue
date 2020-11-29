<template>
  <div id="app">
    <nav id="nav">
   
     
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  background: none;
  border:none;
  color:rgb(161, 159, 159);
  font-size: 16px;
  font-weight: bold;
  outline: none;
  display: flex;
  margin-top:10px;
  margin-bottom: 10px;
  cursor: pointer;
}
button:hover{
  color:rgb(71, 71, 71)
}
.modal-container{
  display: flex;
  justify-content: center;
}
.modal {
  display: block;
  width: 300px;
  margin: 50px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
  color:rgb(80, 79, 79);
  font-size: 16px;
  position: fixed;
  z-index: 9998;
  transition: opacity 0.3s ease;
}
.align-between{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.align-end{
  display: flex;
  justify-content: flex-end;
}
input, textarea{
  border:none;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  padding:5px;
  margin:5px;
  resize: none;
  outline: none;
}
</style>
