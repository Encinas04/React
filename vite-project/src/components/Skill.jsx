import React from 'react';

const Skill = ({array,show}) => {
    return(
        show &&(
            <ul>
                {array.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        )
    )
}
export default Skill;
