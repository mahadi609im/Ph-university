import React from 'react';
import Container from './Container';

const Box = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <div className="p-7 bg-red-300 h-[250px] rounded-lg text-slate-800 flex items-center justify-center flex-col gap-3">
          <h3 className="text-4xl font-bold">Pending</h3>
          <p className="text-2xl font-medium">0</p>
        </div>
        <div className="p-7 bg-purple-300 h-[250px] rounded-lg text-slate-800 flex items-center justify-center flex-col gap-3">
          <h3 className="text-4xl font-bold">Submitted</h3>
          <p className="text-2xl font-medium">0</p>
        </div>
        <div className="p-7 bg-amber-200 h-[250px] rounded-lg text-slate-800 flex items-center justify-center flex-col gap-3">
          <h3 className="text-4xl font-bold">Reviewed</h3>
          <p className="text-2xl font-medium">0</p>
        </div>
      </div>
    </Container>
  );
};

export default Box;
