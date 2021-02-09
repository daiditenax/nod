/*jshint esversion: 6 */

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  

  var mysql      = require('mysql');
  var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '84218421',
   database : 'crm'
 });

 connection.connect();
 
 connection.query(`select ename, dname, job, empno, hiredate  from crm.emp, crm.dept  where emp.deptno = dept.deptno order by ename ` , function(err, rows, fields) {
   if (!err)
     console.log('Records : ', rows);
   else
     console.log(err + 'Error Occured.');
 });

 connection.end();