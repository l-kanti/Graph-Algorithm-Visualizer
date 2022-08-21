enum MazeNode {
    OpenNode = 0,
    WallNode = 1,
    SourceNode = 2,
    ExitNode = 3,
};

type AdjList = Array<Array<number>>;

type nodeArr = Array<MazeNode>;

interface MazeRep {
    totalLength: number,
    nodes: nodeArr,
}