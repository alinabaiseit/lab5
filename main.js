function load () {
    let column_1=[9,8,10,1,9,9,7,2,9,6,2,6,4,2,9,9,8,10,1,8,5,6,4,2,4,10,9,5,8,5]
    let column_2=[6,3,4,2,1,5,7,8,6,2,6,7,9,2,6,7,7,9,6,9,8,2,7,8,7,8,3,1,6,1]
    let column_3=[97,84,71,93,49,71,63,75,100,53,46,51,50,49,53,60,79,78,50,70,42,97,55,75,86,51,47,53,50,92]
    let column_4=[89,49,75,76,58,81,74,48,91,49,62,43,93,50,100,74,73,63,67,44,79,43,40,76,47,94,45,73,45,54]
    sum_1=0
    sum_2=0
    sum_3=0
    sum_4=0
    for (let i = 0; i < 30; i++) {
        sum_1=sum_1+column_1[i];
        sum_2=sum_2+column_2[i];
        sum_3=sum_3+column_3[i];
        sum_4=sum_4+column_4[i];
    }
    let sums=[sum_1,sum_2,sum_3,sum_4]
    total_score=sum_1+sum_2+sum_3+sum_4
    
    const result = {
        column_1:[9,8,10,1,9,9,7,2,9,6,2,6,4,2,9,9,8,10,1,8,5,6,4,2,4,10,9,5,8,5],
        column_2:[6,3,4,2,1,5,7,8,6,2,6,7,9,2,6,7,7,9,6,9,8,2,7,8,7,8,3,1,6,1],
        column_3:[97,84,71,93,49,71,63,75,100,53,46,51,50,49,53,60,79,78,50,70,42,97,55,75,86,51,47,53,50,92],
        column_4:[89,49,75,76,58,81,74,48,91,49,62,43,93,50,100,74,73,63,67,44,79,43,40,76,47,94,45,73,45,54],
        sums:[sum_1,sum_2,sum_3,sum_4],
        total_score: sum_1+sum_2+sum_3+sum_4 
    }
    console.log(result)
}