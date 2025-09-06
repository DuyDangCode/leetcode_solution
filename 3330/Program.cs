namespace main;

public class Solution
{
    public int PossibleStringCount(string word)
    {
        var count = 0;
        char preChar = '0';
        var totalStrings = 0;
        for (int i = 0; i < word.Length; i++)
        {
            var currentChar = word[i];
            if (i == 0)
            {
                preChar = currentChar;
                continue;
            }
            if (currentChar == preChar)
            {
                count++;
                if (i != word.Length - 1)
                    continue;
            }
            preChar = currentChar;
            totalStrings += count;
            count = 0;
        }
        return ++totalStrings;
    }
}
