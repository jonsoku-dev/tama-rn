import { useState } from 'react';

const useFormBase = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useFormBase;
