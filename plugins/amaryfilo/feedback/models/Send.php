<?php namespace amaryfilo\Feedback\Models;

use Model;

/**
 * Send Model
 */
class Send extends Model
{
    /**
     * @var string The database table used by the model.
     */
    public $table = 'amaryfilo_feedback_sends';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [
        'feedback_mails' => [
                'amaryfilo\Feedback\Models\Feedback',
                'table' => 'amaryfilo_send_key',
                'order' => 'id'
            ],
    ];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];
}
