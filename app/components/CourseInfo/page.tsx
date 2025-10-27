// 7. made CourseInfo component and included an courseName string prop.
interface courseName {
    // set name value as a string type
    Name: string;
}

export default function course: React.FC<courseName> => ({Name}) => {

    return(
        <p>My course is {Name}</p>
    );
}