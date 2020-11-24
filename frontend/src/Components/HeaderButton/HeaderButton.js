
function HeaderButton({handleClick, icon, label, value}) {
    return(
        <div className='button-element'>
            <button onClick={handleClick}>{label}</button>
            <span>{value}</span>
        </div>
    );
}

export default HeaderButton;