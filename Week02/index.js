class Contact{
    constructor(name,phone){
        //if (arguments.length !== 2) throw "Error:wrong number of arguments"
        this._name = name;
        this._phone= phone;
    }
   

    get name(){
        return this._name;
    }
    get phone(){
        return this._phone;
    }

}
//Part 01
class StudentContact extends Contact{   
    constructor( name,phone,courses){

       super(name,phone);
       this._courses = courses;
       this._progress = 0;
    }

    get courses(){    
        return this._courses;
    }

    get progress(){ 
        return this._progress;
    }
     

    addCourses(newCourses){
        return this.courses.push(newCourses);
    }

    addProgress(gradesNumber){
        this._progress += gradesNumber;
    }

}


//Part02


class ContactTeacher extends Contact{
    constructor(name,phone,courses,){

        super(name,phone,courses);

        this._students = ["John","George","Jill"];
    }
    


    get students(){
        return this._students;
    }

    addStudentContact(newStudents){  
        return this._students.push(newStudents);
    }
 
    showStudents() {  //show students method
        return this._students;
      }

 
}


const One = new StudentContact ("Aminul","2233333",["Java","react","NodeJs"],"Good");
console.log (One);
console.log (One.progress);
console.log (One.courses);




const two = new ContactTeacher ("Abid","h8888",["Html","CSS","JAVA"]);
console.log(two.showStudents());
two.addStudentContact("Sara");

console.log(two.students);

two.addStudentContact("Pankag");
console.log(two.students);