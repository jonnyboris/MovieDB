import React from 'react';
import PropTypes from 'prop-types';


const CastMember = (props) => {
  const {member} = props;
  return (
    <tr>
      <td className="castPicCell" >
        { !!member.profile_path &&
        <img className="castPic" src={`${props.castUrl}${member.profile_path}`} alt={`Photo of ${member.name}`} title={member.name}/>
        }
      </td>

      <td>{member.name}</td>
      <td>{member.character}</td>
    </tr>
  );
};

CastMember.propTypes = {
  member: PropTypes.object.isRequired,
  castUrl: PropTypes.string.isRequired,

};

export default CastMember;
