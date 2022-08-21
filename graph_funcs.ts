export const isValid  = (i: number, maze: MazeRep) => i >= 0 && i < maze.nodes.length;
export const isOpen   = (i: number, maze: MazeRep) => maze.nodes[i] === 0;
export const isWall   = (i: number, maze: MazeRep) => maze.nodes[i] === 1;
export const isSource = (i: number, maze: MazeRep) => maze.nodes[i] === 2;
export const isExit   = (i: number, maze: MazeRep) => maze.nodes[i] === 3;

export const getEdges = (pos: number, maze: MazeRep): Array<number> => {
    // a neighboring node is an edge if it exists, and if it is not a wall

    // if the position is on the top row, there is nothing above it
    // if it's valid, return the pos - length (the row above it)
    const up = pos < length ? -1 : pos - length;
    // if the position is on the bottom row, there is nothing below it
    // if it's valid, return pos + lenghth (the row below it)
    const down = pos > maze.totalLength - length ? -1 : pos + length;
    // if the position is on the left-most column, there is nothing to the left of it
    // if it's valid, return pos - 1 (the column left of it)
    const left = pos % length === 0 ? -1 : pos - 1;
    // if the position is on the right-most column, there is nothing to the right of it
    // if it's valid, return pos + 1 (the column right of it)
    const right = (pos % length) === length - 1 ? -1 : pos + 1;

    return [up, down, left, right]
    .filter(x => isValid(x, maze) && !isWall(x, maze));
}

export const convertToAdjList = (maze: MazeRep): AdjList => {
    return maze.nodes.map((_, i) => getEdges(i, maze));
};

// write bfs and dfs generators, format TBD