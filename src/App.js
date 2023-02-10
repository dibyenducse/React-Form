export default function Form({status = 'empty'}){
  
  if (status === 'success'){
    return <h1>That's right!</h1>
  }
  return (
    <>
      <h2>City Quiz</h2>
      <p>
        In which city is there a death river?
      </p>
      <form>
        <texarea disabled ={status ==='submitting'} />
        <br />
        <button disabled ={ status ==='empty' || status === 'submitting'
        } /> submit </button>
        {status === 'error' && 
        <p className='Error'>
          Good guess but a wrong answer. Try again!
        </p>
        }
      </form>
    </>
  );
}