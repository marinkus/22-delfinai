function Msg({msg}) {
    if (null === msg) {
        return null
    }
    return (
        <div className="msg-bin">
            <div className="msg-bin">
                {msg}
            </div>
        </div>
    )
}

export default Msg;