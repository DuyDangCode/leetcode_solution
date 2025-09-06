public class Solution
{
    public int[] FindDiagonalOrder(int[][] mat)
    {
        if (mat == null || mat.Length == 0) return [];
        var n = mat.Length;
        var m = mat[0].Length;
        var result = new List<int>(n * m);
        var intermadiate = new List<int>();

        for (var d = 0; d < m + n - 1; d++)
        {
            intermadiate.Clear();

            var r = d >= m ? d - m + 1 : 0;
            var c = d >= m ? m - 1 : d;

            while (r < n && c > -1)
            {
                intermadiate.Add(mat[r][c]);
                r++;
                c--;
            }

            if (d % 2 == 0)
            {
                intermadiate.Reverse();
            }

            result.AddRange(intermadiate);
        }
        return result.ToArray();
    }
}
