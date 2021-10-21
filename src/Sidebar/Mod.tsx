import './mod.css'

interface Props {
    closeModal():void,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ModalComp(props:Props): JSX.Element {
  return (
    <>
    <div className="modal">
    <div className="modal-content">
        <span onClick={props.closeModal} className="close">&times;</span>
        <h2><strong>Add a New Team</strong></h2>
        <hr/>
        <div>
            <label>Name</label>
            <input type="text" style={{width: '100%'}} placeholder="  e.g Designer, Developers or Finance"/>
        </div>

        <button type="button" style={{width: '100%', backgroundColor: '#a9f19d', height: '40px', marginTop: '30px', borderRadius: '25px', border: 'none'}}>Create Team</button>
    </div>
    </div>
    </>
  )
}
