function Userlist(recs){
    // console.log(recs)
    return (
        <>
            <div>{recs.data.id}</div>
            <div>{recs.data.name}</div>
            <div>{recs.data.email}</div>
            <div>{recs.data.address['street']}</div>
            <div>{recs.data.address['suite']}</div>
            <div>{recs.data.address['city']}</div>
        </>
    )
}
export default Userlist;