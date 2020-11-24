import './Chip.scss';

function Chip({data}) {
    debugger
    return (
        <a href={data.url} className='chip-button '>
            {data.name}
        </a>
    );
}

export default Chip;