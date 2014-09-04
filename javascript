//simple-car-movement//
//===================//

//a simple car movement script for unity no licsense please just leave me in the credits//
var speed:float=5; //speed of the car, tweek as needed based on your scale
var turnSpeed:float=180; //turn speed
 
function Update()
{
    //grab the input axes
    var steer=Input.GetAxis("Horizontal");
    var gas=Input.GetAxis("Vertical");
 
    //if they're hittin' the gas...
    if (gas!=0)
    {
        //take the throttle level (with keyboard, generally +1 if up, -1 if down)
        //  and multiply by speed and the timestep to get the distance moved this frame
        var moveDist=gas*speed*Time.deltaTime;
 
        //now the turn amount, similar drill, just turnSpeed instead of speed
        //   we multiply in gas as well, which properly reverses the steering when going 
        //   backwards, and scales the turn amount with the speed
        var turnAngle=steer * turnSpeed * Time.deltaTime * gas;
 
        //now apply 'em, starting with the turn
        transform.rotation.eulerAngles.y+=turnAngle;
 
        //and now move forward by moveVect
        transform.Translate(Vector3.forward*moveDist);
    }
 
}
