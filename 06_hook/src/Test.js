import useCountTimes from './Temp'

function useLastRes(num) {
    const temp = useCountTimes(num)
    let res = 0
    if (temp % 2 === 0) {
        res = 2
    }
    return res
}

export default useLastRes;
