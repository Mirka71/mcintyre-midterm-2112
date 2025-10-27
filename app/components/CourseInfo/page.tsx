// 7. made CourseInfo component and included an courseName string prop.
interface courseName {
    // set name value as a string type
    name: string;
}

export default function course: React.FC<courseName> => ({name}) => {

    return(
        <p>My course is {name}</p>
    );
}