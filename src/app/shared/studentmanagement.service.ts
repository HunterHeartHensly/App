import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentmanagementService {
  private subject = new BehaviorSubject<string>(" ");
  role: any;
 

  constructor(private http: HttpClient) { }

  sendMessage(message: any)
  {
    
    this.subject.next(message);
    //debugger
  }

  recievedMessage()
  {
    return this.subject;
  }

  getRole() {
    return this.http.get<any>("https://localhost:7050/api/GetRole")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  //done
  getStudent() {
    return this.http.get<any>("https://localhost:7050/api/Student/GetStudents")
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }))
  }

  addstudent(data : any) {
    return this.http.post<any>("https://localhost:7050/api/Student/CreateStudent", data )
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

  getUser() {
    return this.http.get<any>("https://localhost:7050/api/GetUser")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getProgram() {
    return this.http.get<any>("https://localhost:7050/api/Program/GetProgram")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getStatus() {
    return this.http.get<any>("https://localhost:7050/api/Status/GetStatus")                            
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

 //done
  Sorting(sort: any) {
    
    return this.http.post<any>("https://localhost:7050/api/Student/Sorting", sort)  
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }))
  }

  //done
  editStudentsDetials(data: any, id: number) {
    return this.http.put<any>("https://localhost:7050/api/Student/EditStudent/"+id,data)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

  getSpecificStudent(ide: any) {
    
    return this.http.get<any>("https://localhost:7050/api/Student/SpecificStudent/"+ide)
      .pipe(map(res => {
        return res;
      }))
  }


}
