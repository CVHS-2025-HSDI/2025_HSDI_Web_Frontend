import './App.css';

function Manager() {


    return (
        <div>
            .buttonAdd {
                background: green;
                transition-duration: 0.3s;

            }
            .buttonAdd:hover {
                background-color: white;
                color: green;
            }

            .buttonRemove {
                background: red;
                transition-duration: 0.3s;
            }

            .buttonRemove:hover {
                background-color: white;
                color: red;
                border: 2px solid red;
            }


        </div>

    );

}:

export default Manager();