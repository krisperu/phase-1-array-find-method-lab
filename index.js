const superbowlWin = (record) => {
    let result = record.find((win) => {
    return win.result ==`W`   
      })
      if (result != undefined) {
        return result.year
      }
}