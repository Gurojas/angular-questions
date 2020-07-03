import { GradeCourse } from './gradecourse';

export class Course {

  // tslint:disable-next-line: variable-name
  public id: string;
  // tslint:disable-next-line: variable-name
  public name: string;
  // tslint:disable-next-line: variable-name
  private description: string;
  // tslint:disable-next-line: variable-name
  private grade: GradeCourse;
  // tslint:disable-next-line: variable-name
  private teacherId: string;

  constructor(id: string, name: string, description: string, grade: GradeCourse, teacherId: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.grade = grade;
    this.teacherId = teacherId;
  }

  public static toJson(course: Course) {
    return {
      id: course.id,
      name: course.name,
      description: course.description,
      grade: course.grade,
      teacherId: course.teacherId
    };
  }

  public static toObject(course: any): Course {
    return new Course(
      course.id,
       course.name,
       course.description,
       course.grade,
       course.teacherId
    );
  }

  // get id(): string {
  //   return this._id;
  // }

  // get name(): string {
  //   return this._name;
  // }

  // set name(value: string) {
  //   this._name = value;
  // }

  // get description(): string {
  //   return this._description;
  // }

  // set description(value: string) {
  //   this._description = value;
  // }

  // get grade(): GradeCourse {
  //   return this._grade;
  // }

  // set grade(value: GradeCourse) {
  //   this._grade = value;
  // }
  // get teacherId(): string {
  //   return this._teacherId;
  // }

  // set teacherId(value: string) {
  //   this._teacherId = value;
  // }

}
