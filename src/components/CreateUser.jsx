import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createUser } from '../feature/user/userSlice';
import Button from './Button';

function CreateUser() {
  const [fullname, setFullname] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullname) return;

    dispatch(createUser(fullname));
    navigate('/menu');
  };
  return (
    <>
      <p className="mb-5 text-sm text-gray-700 md:text-lg">
        👋 Welcome! Please start by telling us your name:
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <input
          className="input mb-8"
          type="text"
          placeholder="Your full name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        {fullname && <Button type="submit">START ORDERING</Button>}
      </form>
    </>
  );
}

export default CreateUser;
