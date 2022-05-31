import './Box.css'

function Box({type = "small", bgColor= '#ccc', classNames = '', styles}) {
    return <div className={`box box-${type} ${classNames}`} style={styles}>Box</div>
}

export default Box;