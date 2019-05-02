let count = 0;
    let i = 0;

    while (true) {
        // if i is less than the length of the array and 2 spaces exist
        if (i + 2 < c.length && c[i + 2] == 0) {
            i += 2;
        }
        // do this is only on space is available to jump
        else if (i + 1 < c.length) {
            i++;
        } else {
            break;
        }
        count++;
    }
    return count;
}