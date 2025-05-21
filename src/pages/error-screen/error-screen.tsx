export default function ErrorScreen () {
  return (
    <div className='outer_error_container' data-testid='error-container'>
      {/* <img className='error_image' src={Image}/> */}
      <p className="error__text">Не удалось загрузить предложения</p>
      <button
        // onClick={() => {
        //   dispatch(fetchOfferAction());
        // }}
        className="replay replay--error"
        type="button"
      >
         Попробовать ещё раз
      </button>
    </div>
  );
}