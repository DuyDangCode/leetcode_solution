public class Solution
{
    public int AreaOfMaxDiagonal(int[][] dimensions)
    {

        int area = 0;
        double diagonal = 0;
        for (var i = 0; i < dimensions.Length; i++)
        {
            double currDiagonal = Math.Pow(dimensions[i][0], 2) + Math.Pow(dimensions[i][1], 2);
            int currArea = dimensions[i][0] * dimensions[i][1];
            if (diagonal < currDiagonal || (diagonal == currDiagonal && area < currArea))
            {
                diagonal = currDiagonal;
                area = currArea;
            }

        }
        return area;

    }
}
