class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = []
        for (let i =0; i< position.length;i++){
            cars.push([position[i],speed[i]])
        }
        cars.sort((a, b) => b[0] - a[0]);
        const stack = []
        let fleet = 0
        for (const[pos,spd] of cars){
            const time = (target - pos)/spd
if (stack.length === 0 || time > stack.at(-1)) {
    stack.push(time);
    fleet++;
}        }
        return fleet
    }
}
